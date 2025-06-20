import internetarchive

search_results = internetarchive.search_items('subject:technet AND mediatype:software')

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
