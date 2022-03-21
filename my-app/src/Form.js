import React from 'react'

function Form(props)
{

    //const array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const array=[]

    for(let i=0;i<25;i++)
    {
        array.push(i);
    }
    function indexclick(event)
    {
        event.preventDefault();
        const option = document.getElementById('num')
        const output = option.value
    //   console.log(props.ghanta)
      console.log(output)
        var  some = 0;
        if(props.ghanta === output)
        props.noise();
        else
        console.log('not playing');

    }
    return(
        <div>
            <form>
                <label htmlFor="num"></label>
                <select  name='num' id="num">
                {
                    array.map(index=>{
                     return <option value={index}>{index}</option>
                    })
                }
                </select>
                <button  onClick={indexclick}>Submit</button>
            </form>
        </div>
    )
}

export default Form;