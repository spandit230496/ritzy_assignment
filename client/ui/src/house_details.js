const house_details={
  "locations": [
    {
      "id": 1,
      "name": "Downtown",
      "apartments": [
        {
          "id": 101,
          "name": "City View Apartments",
          "rooms": [
            {
              "id": 1001,
              "roomNumber": 101,
              "bathrooms": 2,
              "capacity": 4,
              "occupants": [
                {
                  "id": 1,
                  "name": "Alice",
                  "gender": "Female"
                },
                {
                  "id": 2,
                  "name": "Bob",
                  "gender": "Male"
                }
              ]
            },
            {
              "id": 1002,
              "roomNumber": 102,
              "bathrooms": 1,
              "capacity": 2,
              "occupants": [
                {
                  "id": 3,
                  "name": "Charlie",
                  "gender": "Male"
                }
              ]
            }
          ]
        },
        {
          "id": 102,
          "name": "Urban Lofts",
          "rooms": [
            {
              "id": 1003,
              "roomNumber": 201,
              "bathrooms": 1,
              "capacity": 3,
              "occupants": [
                {
                  "id": 4,
                  "name": "David",
                  "gender": "Male"
                },
                {
                  "id": 5,
                  "name": "Emma",
                  "gender": "Female"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Suburban Retreat",
      "apartments": [
        {
          "id": 103,
          "name": "Green Meadows",
          "rooms": [
            {
              "id": 1004,
              "roomNumber": 301,
              "bathrooms": 2,
              "capacity": 5,
              "occupants": [
                {
                  "id": 6,
                  "name": "Frank",
                  "gender": "Male"
                },
                {
                  "id": 7,
                  "name": "Grace",
                  "gender": "Female"
                },
                {
                  "id": 8,
                  "name": "Henry",
                  "gender": "Male"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


module.exports=house_details