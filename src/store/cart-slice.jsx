
import { createSlice } from '@reduxjs/toolkit'
import { calculateLevenshteinDistance, findMatchingProducts } from './inputSearchLogic'


const image1 = 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image2 = 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image3 = 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const image4 = 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image5 = 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image6 = 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image7 = 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image8 = 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image9 = 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image10 = 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image11 = 'https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600'
const image12 = 'https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600'

const productsArrayState = [{ title: 'Avant-Garde Lamp', brand: 'Modenza', category: 'Kids', price: 179.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#44E411]', id: 'default' }, { coloring: 'bg-[#1411E4]', id: 'secondary' }], amount: 1, image: image1 },
{ title: 'Chic Chair', brand: 'Luxora', category: 'Chairs', price: 339.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }, { coloring: 'bg-[#44E411]', id: 'secondary' }, { coloring: 'bg-[#1411E4]', id: 'additional' }], amount: 1, image: image2 },
{ title: 'Coffee Table', brand: 'Modenza', category: 'Tables', price: 179.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }, { coloring: 'bg-[#F8FC00]', id: 'secondary' }], amount: 1, image: image3 },
{ title: 'Comfy Bed', brand: 'Homestead', category: 'Beds', price: 129.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }], amount: 1, image: image4 },
{ title: 'Contemporary Sofa', brand: 'Comfora', category: 'Sofas', price: 159.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#F8FC00]', id: 'default' }], amount: 1, image: image5 },
{ title: 'Cutting-Edge Bed', brand: 'Homestead', category: 'Beds', price: 84.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#F8FC00]', id: 'default' }, { coloring: 'bg-[#1411E4]', id: 'secondary' }], amount: 1, image: image6 },
{ title: 'Futuristic Shelves', brand: 'Luxora', category: 'Kids', price: 94.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#44E411]', id: 'default' }, { coloring: 'bg-[#F8FC00]', id: 'secondary' }], amount: 1, image: image7 },
{ title: 'Glass Table', brand: 'Modenza', category: 'Tables', price: 159.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }, { coloring: 'bg-[#1411E4]', id: 'secondary' }], amount: 1, image: image8 },
{ title: 'King Bed', brand: 'Homestead', category: 'Beds', price: 189.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }], amount: 1, image: image9 },
{ title: 'Lounge Chair', brand: 'Luxora', category: 'Chairs', price: 259.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }, { coloring: 'bg-[#44E411]', id: 'secondary' }, { coloring: 'bg-[#1411E4]', id: 'additional' }], amount: 1, image: image10 },
{ title: 'Toy Shelf', brand: 'Luxora', category: 'Kids', price: 79.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#44E411]', id: 'default' }, { coloring: 'bg-[#F8FC00]', id: 'secondary' }], amount: 1, image: image11 },
{ title: 'Reclining Sofa', brand: 'Comfora', category: 'Sofas', price: 329.99, description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', colors: [{ coloring: 'bg-[#E41111]', id: 'default' }, { coloring: 'bg-[#44E411]', id: 'secondary' }, { coloring: 'bg-[#1411E4]', id: 'additional' }], amount: 1, image: image12 },]


const cartSlice = createSlice({
  name: 'Cart&products',
  initialState: {
    products: productsArrayState,
    cartItems: [],
    totalAmount: 0,
    totalPrice: 0,
    SubtotalPrice: 0,
    Shipping: 5,
    Tax: 0,
    orderTotal: 0,
    productsValidated: [],
    formIsUsed: null
  },
  reducers: {
    // Reducer function to add an item to the cart
    addItemToCart(state, action) {
      const { title, brand, price, color, amount, image, description } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.title === title && item.color === color);
      if (existingItemIndex === -1) {
        // Item doesn't exist in the cart, so add it.
        const newItem = {
          title,
          brand,
          price,
          description,
          color,
          amount: +amount,
          image,
        };

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],



        };
      } else {
        // Item exists in the cart, so update its amount.
        state.cartItems[existingItemIndex].amount += amount;


      }
    },
    // Reducer function to validate the filter form and update the product list
    formValidateChecker(state, action) {
      let testArray = [...state.products]

      if (action.payload.category !== 'all') {
        testArray = state.products.filter(item => item.category === action.payload.category)
      }

      if (action.payload.company !== 'all') {
        if (action.payload.category !== 'all') {
          testArray = state.products.filter(item => item.brand === action.payload.company && item.category === action.payload.category)

        } else {
          testArray = state.products.filter(item => item.brand === action.payload.company)
        }
      }


      if (action.payload.sort !== 'all') {
        if (action.payload.sort === 'a-z') {
          testArray = testArray.sort((a, b) => a.title.localeCompare(b.title)); // Sorting by name
        } else if (action.payload.sort === 'z-a') {
          testArray = testArray.sort((a, b) => b.title.localeCompare(a.title)); // Reverse sorting by name
        } else if (action.payload.sort === 'high price') {
          testArray = testArray.sort((a, b) => b.price - a.price); // Sorting by price in descending order
        } else if (action.payload.sort === 'low price') {
          testArray = testArray.sort((a, b) => a.price - b.price); // Sorting by price in ascending order
        }
      }



      if (+action.payload.price !== 500) {
        testArray = testArray.filter(item => item.price < +action.payload.price)
      }

      if (action.payload.shippingFees === true) {
        testArray = testArray.filter(item => item.price > 300)

      }


      if (action.payload.productInput !== '') {
        const matchingProducts = findMatchingProducts(
          action.payload.productInput,
          testArray,
                    /* set your desired threshold here */ 7 // Example threshold of 3 (adjust as needed)
        );

        if (matchingProducts.length > 0) {
          // Update the productsValidated array with matching products
          testArray = testArray.filter(item => matchingProducts.some(matchingItem => matchingItem.title === item.title));
        } else {
          // Handle case when no matching products are found
          testArray = [];
        }

      }

      return {
        ...state, formIsUsed: 'true', productsValidated: testArray,
      };


      // Reducer function to reset the form flag
    }, resetForm(state) {
      return {
        ...state, formIsUsed: null
      }

    },
    // Reducer function to remove an item from the cart
    removeItemToCart(state, action) {
      const { title, color, amount } = action.payload;
      const CartAfterRemoval = state.cartItems.filter(item => item.title !== title || item.color !== color)
      return {
        ...state,
        cartItems: CartAfterRemoval,

      }
    },
    // Reducer function to modify the amount of an item in the cart
    modifiyAmount(state, action) {
      const { title, color, amount } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.title === title && item.color === color);

      state.cartItems[existingItemIndex].amount = amount;

    },
    // Reducer function to collect UI values for order summary  
    collectUiValues(state, action) {
      const { totalAmountUI, subTotalPrice, shippingCost, taxFees, orderTotal } = action.payload;
      state.totalAmount = totalAmountUI
      state.Shipping = shippingCost
      state.SubtotalPrice = subTotalPrice
      state.Tax = taxFees
      state.orderTotal = orderTotal
    },
    // Reducer function to empty the cart on form submission   
    emptyCartOnSubmission(state) {
      state.cartItems = []
      state.totalAmount = 0
    }
  }

})
// Export actions defined in the slice

export const cartAction = cartSlice.actions

// Export the cartSlice reducer

export default cartSlice