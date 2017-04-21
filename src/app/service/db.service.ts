
export class DbService {

  public students = [
    {id: '1', name: 'T', email: 'a@b.nl'},
    {id: '2', name: 'K', email: 'b@c.nl'},
    {id: '3', name: 'A', email: 'c@d.nl'},
    {id: '4', name: 'D', email: 'd@e.nl'},
    {id: '5', name: 'M', email: 'e@f.nl'},
  ];

  constructor() {
  }

  getData() {
    return this.students;
  }
  getDataById(id) {
    for (const key in this.students) {
      if ( this.students[key].id === id ) {
        return this.students[key];
      }
    }
    return null;
  }

}
