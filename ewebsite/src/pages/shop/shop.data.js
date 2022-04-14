const SHOP_DATA = [
    {
      id: 1,
      title: 'Top Two Wheeler',
      routeName: 'toptwowheel',
      items: [
        {
          id: 1,
          name: 'Ganesh Garages',
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        },
        {
          id: 2,
          name: 'AutoCare center',
          imageUrl: 'https://images.unsplash.com/photo-1594132665437-d2e8fd3c7ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: "Warje"
        },
        {
          id: 3,
          name: 'New Bike servicing center',
          imageUrl: 'https://images.unsplash.com/photo-1581858544302-c40e2254ff87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          price: "Warje"
        },
        {
          id: 4,
          name: 'Raju Two Wheeler services',
          imageUrl: 'https://images.unsplash.com/photo-1581858544302-c40e2254ff87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          price: "Baner"
        },
        {
          id: 5,
          name: 'My Bike Care Center',
          imageUrl: 'https://images.unsplash.com/photo-1594132665437-d2e8fd3c7ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: "Kothrud"
        },
        {
          id: 6,
          name: 'Sai service center',
          imageUrl: 'https://images.unsplash.com/photo-1581858544302-c40e2254ff87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          price: "Baner"
        },
        {
          id: 7,
          name: 'The New Poona Garage',
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Deccan"
        },
        {
          id: 8,
          name: "Bike Care",
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Warje"
        },
        {
          id: 9,
          name: 'The Modern Bike Point',
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Baner"
        }
      ]
    },
    {
      id: 2,
      title: 'Top Four Wheeler',
      routeName: 'topfourwheel',
      items: [
        {
          id: 10,
          name: 'The Car Care',
          imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Warje"
        },
        {
          id: 11,
          name: 'Raju Garages',
          imageUrl: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        },
        {
          id: 12,
          name: 'MechIt garages',
          imageUrl: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Deccan"
        },
        {
          id: 13,
          name: 'The shining car care point',
          imageUrl: 'https://images.pexels.com/photos/4489735/pexels-photo-4489735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Baner"
        },
        {
          id: 14,
          name: 'Diamond Garage',
          imageUrl: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Paud Road"
        },
        {
          id: 15,
          name: 'The HighTech Garage',
          imageUrl: 'https://images.pexels.com/photos/3644847/pexels-photo-3644847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 160
        },
        {
          id: 16,
          name: 'Modern Services',
          imageUrl: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Shivaji Nagar"
        },
        {
          id: 17,
          name: 'Nissan Car Care',
          imageUrl: 'https://images.pexels.com/photos/7629190/pexels-photo-7629190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        }
      ]
    },
    {
      id: 3,
      title: 'Recommended',
      routeName: 'recommended',
      items: [
        {
          id: 18,
          name: 'Diamond Garage',
          imageUrl: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Paud Road"
        },
        {
          id: 19,
          name: 'The Modern Bike Point',
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Baner"
        },
        {
          id: 20,
          name: 'Nissan Car Care',
          imageUrl: 'https://images.pexels.com/photos/7629190/pexels-photo-7629190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        },
        {
          id: 21,
          name: 'The HighTech Garage',
          imageUrl: 'https://images.pexels.com/photos/3644847/pexels-photo-3644847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 160
        },
        {
          id: 22,
          name: 'The HighTech Garage',
          imageUrl: 'https://images.pexels.com/photos/3644847/pexels-photo-3644847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 160
        }
      ]
    },
    {
      id: 4,
      title: 'Near Me',
      routeName: 'nearme',
      items: [
        {
          id: 23,
          name: 'Apte Garages and Services',
          imageUrl: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Paud Road"
         
        },
        {
          id: 24,
          name: 'AutoMechs',
          imageUrl: 'https://images.pexels.com/photos/4489760/pexels-photo-4489760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
         
        },
        {
          id: 25,
          
          name: 'Mech Service Cener',
          imageUrl: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Paud Road"
        },
        {
          id: 26,
          name: 'Anand Car center',
          imageUrl: 'https://images.pexels.com/photos/4480461/pexels-photo-4480461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Paud Road"
        },
        {
          id: 27,
          name: 'Raju Garages',
          imageUrl: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        },
        {
          id: 28,
          name: 'Ganesh Garages',
          imageUrl: 'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: "Kothrud"
        },
        {
          id: 29,
          name: 'My Bike Care Center',
          imageUrl: 'https://images.unsplash.com/photo-1594132665437-d2e8fd3c7ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: "Kothrud"
        }
      ]
    },
    
  ];
  
  export default SHOP_DATA;