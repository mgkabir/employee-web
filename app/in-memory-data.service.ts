export class InMemoryDataService {
  createDb() {
    let employees = [
      { id: 11, name: 'Mr. Arif', department: 'dotNET' },
      { id: 12, name: 'Narco' , department: 'Java' },
      { id: 13, name: 'Bombasto', department:'QA'},
      { id: 14, name: 'Celeritas',department:'PHP' },
      { id: 15, name: 'Magneta' ,department:'Java'},
      { id: 16, name: 'RubberMan',department:'QA' },
      { id: 17, name: 'Dynama' ,department:'QA'},
      { id: 18, name: 'Dr IQ' , department:'PHP'},
      { id: 19, name: 'Magma',department:'iOS' },
      { id: 20, name: 'Tornado',department:'iOS' }
    ];
    return { employees };
  }
}
