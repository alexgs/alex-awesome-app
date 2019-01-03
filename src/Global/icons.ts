import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee as falCoffee } from '@fortawesome/pro-light-svg-icons';
import { faCoffee as farCoffee } from '@fortawesome/pro-regular-svg-icons';
import { faCoffee as fasCoffee } from '@fortawesome/pro-solid-svg-icons';

// For more information, see [FontAwesome React package documentation][1].
// tslint:disable-next-line:max-line-length
// [1]: https://www.npmjs.com/package/@fortawesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

library.add(
    fab,
    falCoffee,
    farCoffee,
    fasCoffee,
);

// Usage example:
// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//
// const Beverage = () => (
//     <div>
//         Favorite beverage: <FontAwesomeIcon icon={['far', 'coffee']} />
//     </div>
// );
//
// export default Beverage
