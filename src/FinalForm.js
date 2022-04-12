import { useState } from 'react'
import './FinalForm.css';

function FinalForm() {
    const [value, setValue] = useState('')
    const click = (e) =>{
        e.preventDefault();
        e.target.value == 'usa' ? setValue('Kumar') : setValue('Rathore');
        console.log(e.target.value);
    }
  return (
    <div>
      <h3>Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="nationality">Nationality</label>
    <input type="text" id="nationality" name="nationality" placeholder="Your Nationality" value={value} />

    <label for="country">Country</label>
    <select id="country" name="country" onChange={click}>
      <option value=" ">Choose Country</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <input type="submit" value="Submit" />
  </form>
</div>
    </div>
  )
}

export default FinalForm
