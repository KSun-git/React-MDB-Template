import React , {useState} from 'react';
import MultiSelect from "react-multi-select-component";

const MultiYearSelector = () => {
	const options = [
	  { label: "2020년", value: "2020" },
	  { label: "2019년", value: "2019" },
	  { label: "2018년", value: "2018" },
	  { label: "2017년", value: "2017" },
	  { label: "2016년", value: "2016" },
	  { label: "2015년", value: "2015" },
	  { label: "2014년", value: "2014" },
	  { label: "2013년", value: "2013" },
	  { label: "2012년", value: "2012" },
	  { label: "2011년", value: "2011" },
	  { label: "2010년", value: "2010" },
	  { label: "2009년", value: "2009" },
	  { label: "2008년", value: "2008" },
	  { label: "2007년", value: "2007" },
	  { label: "2006년", value: "2006" },
	  { label: "2005년", value: "2005" },
	  { label: "2004년", value: "2004" },
	  { label: "2003년", value: "2003" },
	  { label: "2002년", value: "2002" },
	  { label: "2001년", value: "2001" },
	];
   
	const [selected, setSelected] = useState([]);
   
	return (
	  <div style={{width:"200px", display:"inline-block"}} className="ml-2">
		{/* <pre>{JSON.stringify(selected)}</pre>*/}
		<MultiSelect
		  options={options}
		  value={selected}
		  onChange={setSelected}
		  labelledBy={"Select"}
		  disableSearch={true}
		  shouldToggleOnHover={false}
		  selectAllLabel="전체선택"
		/>
	  </div>
	);
  };

export default MultiYearSelector;