import internetarchive
import sys

if len(sys.argv) < 3:
	print("Usage: python search.py [mediatype] [subject]")
	sys.exit(1)

ITEM_MEDIATYPE = sys.argv[1]
ITEM_SUBJECT = sys.argv[2]

search_results = internetarchive.search_items(f'mediatype:{ITEM_MEDIATYPE} AND subject:{ITEM_SUBJECT}')

for item in search_results:
    item_id = item['identifier']
    print(f"- {item_id}")

    item = internetarchive.get_item(item_id)

    for file in item.files:
        print(f"    - {file['name']}")

    for key, value in item.metadata.items():
        if key == "description":
             continue
        print(f"    + {key}: {value}")
