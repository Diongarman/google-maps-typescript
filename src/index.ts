import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const map = new CustomMap('map');
const company = new Company();
const user = new User();

map.addMarker(company);
map.addMarker(user);
