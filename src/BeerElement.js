import Collapsible from 'react-collapsible';


const BeerElement = () => {
    <li key={item.id} className='list'>
    <div><span>Name:</span> {item.name} </div>
    <Collapsible trigger = "Description" triggerStyle = {{fontWeight: "bold"}} >
      <div>{item.description} </div>
    </Collapsible>

    {/* <span className='repo-description'>{repo.description}</span> */}
  </li>

}

export default BeerElement