import internetarchive
import sys
import re

if len(sys.argv) < 8:
	print("Usage: python upload.py [id] [title] [date] [publisher] [category] [description file] [upload file(s)]")
	sys.exit(1)

ITEM_ID = sys.argv[1]
ITEM_TITLE = sys.argv[2]
ITEM_DATE = sys.argv[3]
ITEM_PUBLISHER = sys.argv[4]
ITEM_CATEGORY = sys.argv[5]
ITEM_DESC_FILE = sys.argv[6]

try:
	with open(ITEM_DESC_FILE, 'r', encoding='utf-8') as f:
		description_content = f.read().strip().replace("<", "[").replace(">", "]")
		description_content = re.sub(r'(Program)\s+(Files)', r'\1&nbsp;\2', description_content, flags=re.IGNORECASE)
		description_content = re.sub(r'(Windows)/(System32)', r'\1&#47;\2', description_content, flags=re.IGNORECASE)
except FileNotFoundError:
	print(f"Error: description file '{ITEM_DESC_FILE}' not found")
	sys.exit(1)
except Exception as e:
	print(f"Error reading description file: {e}")
	sys.exit(1)

ITEM_FILES = sys.argv[7:]

creator = ITEM_PUBLISHER
if creator == "Microsoft":
	creator += " Corporation"

subjects = [ITEM_PUBLISHER, ITEM_CATEGORY]
if ITEM_FILES and ITEM_FILES[0].endswith(".iso"):
	subjects.append("CD-ROM")

ITEM_METADATA = {
	"title": ITEM_TITLE,
	"mediatype": "software",
	"collection": "open_source_software",
	"creator": creator,
	"date": ITEM_DATE,
	"language": "eng",
	"subject": subjects,
	"description": "<pre>\n" + description_content + "</pre>"
}

# print("ITEM_METADATA:")
# for key, value in ITEM_METADATA.items():
# 	print(f"  {key}: {value}")

try:
	r = internetarchive.upload(
		ITEM_ID,
		ITEM_FILES,
		metadata=ITEM_METADATA,
		verbose=True
	)

	if r[0].status_code == 200:
		print(f"Upload successful: https://archive.org/details/{ITEM_ID}")
		sys.exit(0)
	else:
		print(f"Upload failed: {r[0].status_code} {r[0].text}")
		sys.exit(1)

except Exception as e:
	print(f"Upload error: {e}")
	sys.exit(1)
