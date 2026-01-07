import os
import json

def merge_json_files_for_api(root_dir):
    merged_data = {}
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            # Skip the output file itself to avoid infinite loops/duplicates
            if filename.endswith('.json') and filename != 'db.json':
                filepath = os.path.join(dirpath, filename)
                
                # Clean up the key: 'auth/users.json' -> 'users'
                # This makes your API endpoints clean: /users instead of /auth/users.json
                resource_name = os.path.splitext(filename)[0]
                
                with open(filepath, 'r') as f:
                    try:
                        data = json.load(f)
                        merged_data[resource_name] = data
                        print(f"✅ Loaded {filename} as /{resource_name}")
                    except json.JSONDecodeError:
                        print(f"❌ Failed to parse {filename}")
                        
    return merged_data

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    merged = merge_json_files_for_api(script_dir)
    
    output_path = os.path.join(script_dir, 'db.json')
    with open(output_path, 'w') as f:
        json.dump(merged, f, indent=4)
        
    print(f"\n🚀 Database ready! Run: npx json-server --watch db.json")