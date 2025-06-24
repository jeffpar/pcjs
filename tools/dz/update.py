import internetarchive
import sys

if len(sys.argv) < 4:
	print("Usage: python update.py [id] [title] [description file]")
	sys.exit(1)

ITEM_ID = sys.argv[1]
ITEM_TITLE = sys.argv[2]
ITEM_DESC_FILE = sys.argv[3]

try:
	with open(ITEM_DESC_FILE, 'r', encoding='utf-8') as f:
		description_content = f.read().strip().replace("Program Files", "Program&nbsp;Files").replace("<", "[").replace(">", "]")
except FileNotFoundError:
	print(f"Error: description file '{ITEM_DESC_FILE}' not found")
	sys.exit(1)
except Exception as e:
	print(f"Error reading description file: {e}")
	sys.exit(1)

ITEM_METADATA = {
	"title": ITEM_TITLE,
	"description": "<pre>\n" + description_content + "</pre>"
}

try:
	r = internetarchive.modify_metadata(ITEM_ID, ITEM_METADATA)

	if r.status_code == 200:
		print(f"Update successful: https://archive.org/details/{ITEM_ID}")
		sys.exit(0)
	else:
		if r.text.startswith('<'):
			print(f"Update failed: {r.status_code} {r.text[:200]}")
			sys.exit(1)
		response_data = r.json()
		if response_data.get('error', '').startswith("no changes"):
			print(f"No changes needed: https://archive.org/details/{ITEM_ID}")
			sys.exit(0)
		print(f"Unknown error: {r.status_code} {r.text}")
		sys.exit(1)

except Exception as e:
	print(f"Update error: {e}")
	sys.exit(1)
