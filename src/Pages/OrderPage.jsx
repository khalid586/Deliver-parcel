import React from 'react'

function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);

    form.reset();
}


function OrderPage() {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" className='border-4'/>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default OrderPage