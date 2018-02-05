import fontAwesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faCoffee as fplCoffee } from '@fortawesome/fontawesome-pro-light';
import { faCoffee as fprCoffee } from '@fortawesome/fontawesome-pro-regular';
import { faCoffee as fpsCoffee } from '@fortawesome/fontawesome-pro-solid';

// For more information, see [FontAwesome React package documentation][1].
// [1]: https://www.npmjs.com/package/@fortawesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

fontAwesome.library.add(
    brands,
    fplCoffee,
    fprCoffee,
    fpsCoffee
);


// Usage example:
// import React from 'react'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//
// const Beverage = () => (
//     <div>
//         Favorite beverage: <FontAwesomeIcon icon="fpsCoffee"/>
//     </div>
// );
//
// export default Beverage
