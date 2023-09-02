console.log('hello world');
console.log(1)

type contactlisttype = {
  id: string;
  name: string | null;
  number: string;
  storage: string ;
};

const contactnamelist: contactlisttype[] = [];

const submitButton = document.querySelector("#submit");
submitButton?.addEventListener("click", () => {
  const id: contactlisttype["id"] =crypto.randomUUID(); 
  const contactname= document.querySelector<HTMLInputElement>('#contactname')!.value;
  const contactnumber = document.querySelector<HTMLInputElement>('#contactnumber')!.value;
  const storage = document.querySelector<HTMLInputElement>('input[name=radio]:checked')!.value


  const newContact: contactlisttype = {
    id: id,
    name: contactname,
    number: contactnumber,
    storage: storage
  };

  contactnamelist.push(newContact);

  console.log(contactnamelist);
});