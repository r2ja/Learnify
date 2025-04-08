
from typing import Dict

def get_user_profile(user_id: str) -> Dict[str, str]:

    dummy_profiles = {
        "user123": {
            "active_reflective": "active",
            "sensing_intuitive": "sensing",
            "visual_verbal": "visual",
            "sequential_global": "sequential"
        },
        "user456": {
            "active_reflective": "reflective",
            "sensing_intuitive": "intuitive",
            "visual_verbal": "verbal",
            "sequential_global": "global"
        }
    }
    
    return dummy_profiles.get(user_id, {
        "active_reflective": "active",
        "sensing_intuitive": "sensing",
        "visual_verbal": "visual",
        "sequential_global": "sequential"
    })
