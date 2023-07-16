import React from 'react'
import { MenuProducts } from '../components/MenuProducts'

export const Menu = () => {
  const menu = [
    {
      title: 'PIZZA',
      data: [
        {
          saucer: 'Pizza Romana',
          description: 'Fresh mozzarella, bread flour, tomato, olive oil, yeast',
          price: '$11'
        },
        {
          saucer: 'Greek-Style Pizza',
          description: 'White cheddar, sauce, tomato paste, bread flour, red pepper flakes.',
          price: '$8.00'
        },
        {
          saucer: 'Chicago Thin Crust Pizza',
          description: 'Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.',
          price: '$13.00'
        },
        {
          saucer: 'Pizza romana',
          description: 'Rice flour, olive oil, plain flour, sea salt, dried yeast.',
          price: '$5.00'
        },
        {
          saucer: 'Pizza fritta',
          description: 'Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.',
          price: '$8.00'
        },
        {
          saucer: 'California-Style Pizza',
          description: 'Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.',
          price: '$15.00'
        },
        {
          saucer: 'Pizza al padellino',
          description: 'Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper',
          price: '$10.00'
        },
        {
          saucer: 'Grandma Pie',
          description: 'Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.',
          price: '$11.00'
        },
        {
          saucer: 'Pizza Carbonara',
          description: 'Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.',
          price: '$8.00'
        },
        {
          saucer: 'Fugazzeta',
          description: 'Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.',
          price: '$9.00'
        }
      ],
      style: 'menu'
    },
    {
      title: 'PASTA',
      data: [
        {
          saucer: 'Italian Mac and Cheese',
          description: 'Italian sausage, pasta, cheese sauce, cream, baby spinach.',
          price: '$8.00'
        },
        {
          saucer: 'Chicken Florentine Pasta',
          description: 'Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.',
          price: '$10.00'
        },
        {
          saucer: 'Five-Cheese Ziti Al Forno',
          description: 'Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.',
          price: '$15.00'
        },
        {
          saucer: 'Stuffed Rigatoni',
          description: 'Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.',
          price: '$9.00'
        },
        {
          saucer: 'Lemon Ricotta Pasta',
          description: 'Spaghetti, ricotta, lemon, red pepper flakes, parmesan.',
          price: '$13.00'
        },
        {
          saucer: 'Lasagna Bolognese',
          description: 'Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.',
          price: '$11.00'
        },
        {
          saucer: 'Lamb Ragù',
          description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.',
          price: '$12.00'
        },
        {
          saucer: 'Orecchiette with Broccoli Rabe',
          description: 'Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.',
          price: '$13.00'
        },
        {
          saucer: 'Toasted Ravioli',
          description: 'Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.',
          price: '$13.00'
        },
        {
          saucer: 'Lasagna Roll Ups',
          description: 'Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.',
          price: '$13.00'
        }
      ],
      style: ''
    },
    {
      title: 'SUSHI',
      data: [
        {
          saucer: 'Stanley Kubrick - 24 Pcs',
          description: 'Clockwork Orange Roll, Spicy Salmon Roll, Very Vegetarian Maki',
          price: '$11.00'
        },
        {
          saucer: 'Foggy Albion - 26Pcs',
          description: 'Sunny Philadelphia, Sebastian the Crab, Cucumber Maki Raki, Salmon Gunkan with Cream Cheese - 2Pcs',
          price: '$30.00'
        },
        {
          saucer: 'Nigiri Ocean - 14 Pcs',
          description: '14 Different Nigiris',
          price: '$40.00'
        },
        {
          saucer: 'Hungry Set 64Pcs',
          description: '14 Different Nigiris',
          price: '$50.00'
        },
        {
          saucer: 'Cucumber Maki Raki 8Pcs',
          description: 'Cucumber, Sesame, Rice, Nori.',
          price: '$4.00'
        },
        {
          saucer: 'Avocado Maki Raki 8Pcs',
          description: 'Avocado, Cream Cheese, Rice, Nori.',
          price: '$5.00'
        },
        {
          saucer: 'Very Vegetarian Maki 8Pcs',
          description: 'Avocado, Cream Cheese, Cucumber, Rice, Nori.',
          price: '$5.00'
        },
        {
          saucer: 'Salmon Gunkan with Cream Cheese',
          description: 'Perfect sushi rice, Nigiri prawns, Cream cheese, Wasabi.',
          price: '$11.00'
        },
        {
          saucer: 'Vulcan Tobiko',
          description: 'Delicious Gunkan with Tobiko and Rice.',
          price: '$4.00'
        },
        {
          saucer: 'Nigiri with Eel 1Pc',
          description: 'Eel, rice.',
          price: '$6.00'
        }
      ],
      style: 'menu'
    },
    {
      title: 'DRINKS',
      data: [
        {
          saucer: 'Fanta Orange Soda',
          description: '',
          price: '$1.00'
        },
        {
          saucer: 'Great Value Twist Up Lemon Lime Soda Pop',
          description: '',
          price: '$2.00'
        },
        {
          saucer: 'Sunkist Orange Soda',
          description: '',
          price: '$1.00'
        },
        {
          saucer: 'Great Value Cream Soda Pop',
          description: '',
          price: '$3.00'
        },
        {
          saucer: 'Pepsi Soda Pop',
          description: '',
          price: '$3.00'
        },
        {
          saucer: 'A&W Caffeine-Free, Low Sodium Root Beer Soda Pop',
          description: '',
          price: '$3.00'
        },
        {
          saucer: 'Red Bull Energy Drink',
          description: '',
          price: '$2.00'
        },
        {
          saucer: 'Sams Cola Soda Pop',
          description: '',
          price: '$1.00'
        },
        {
          saucer: 'Pure Life Purified Water',
          description: '',
          price: '$1.00'
        },
        {
          saucer: 'Aquafina Purified Bottled Drinking Water',
          description: '',
          price: '$2.00'
        }
      ],
      style: ''
    }
  ]

  return (
    <>
      <p className='text-center font-Roboto font-semibold text-Black dark:text-White transition-colors md:text-lg'>
        GREAT
      </p>
      <h2 className='text-center font-Roboto font-bold text-[2rem] md:text-[3rem] text-Black dark:text-White transition-colors'>
        FOOD MENU
      </h2>
      <div className='mt-[6rem] grid gap-[3rem] md:grid-cols-2 md:gap-[2rem]'>
        {
          menu.map((value, index) => (
            <MenuProducts key={index} title={value.title} dishes={value.data} style={value.style} />
          ))
        }
      </div>
    </>
  )
}
