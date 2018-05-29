require('dotenv').config();

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

configure({adapter: new Adapter()});

chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiEnzyme());
