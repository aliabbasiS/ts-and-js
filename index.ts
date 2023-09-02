console.log('hello world');

type contactlisttype = {
  id: string;
  name: string | null;
  number: number;
  storage: 'Sim' | 'device';
};

const contactnamelist: contactlisttype[] = [];

const submitButton = document.querySelector("#submit");
submitButton?.addEventListener("click", () => {
  const id: contactlisttype["id"] =crypto.randomUUID(); // Replace generateUniqueId() with the appropriate function to generate a unique ID
  const contactname: contactlisttype["name"] = document.querySelector('#contactname')?.value;
  const contactnumber: contactlisttype["number"] = document.querySelector('#contactnumber')?.value;
  const rememberCheckbox = document.querySelector('#remember');
  const storage: contactlisttype["storage"] = rememberCheckbox?.checked ? 'device' : 'Sim';

  const newContact: contactlisttype = {
    id: id,
    name: contactname,
    number: contactnumber,
    storage: storage
  };

  contactnamelist.push(newContact);

  console.log(contactnamelist);
});