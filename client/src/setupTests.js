import Adapter from 'enzyme-adapter-react-16';
import serializer from 'jest-glamor-react';
import { configure } from 'enzyme';
import 'jest-enzyme';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(serializer);
