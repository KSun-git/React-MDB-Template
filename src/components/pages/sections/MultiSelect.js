import React , {useEffect, useState} from 'react';
import MultiSelect from "react-multi-select-component";

const MultiSelector = (props) => {
	const options = [
	  { label: "제출자명", value: "제출자명" },
	  { label: "에너지원", value: "에너지원" },
	  { label: "설비코드", value: "설비코드" },
	  { label: "사업구분", value: "사업구분" },
	  { label: "발전소명", value: "발전소명" },
	  { label: "발전년월", value: "발전년월" },
	  { label: "REC코드", value: "REC코드" },
	  { label: "시작번호", value: "시작번호" },
	  { label: "끝번호", value: "끝번호" },
	  { label: "REC발급번호", value: "REC발급번호" },
	  { label: "REC발급일", value: "REC발급일" },
	  { label: "REC만료일", value: "REC만료일" },
	  { label: "REC ID", value: "REC만료일" },
	  { label: "REC제출량", value: "REC만료일" },
	  { label: "조달형태", value: "조달형태" },
	  { label: "외부/자체", value: "외부/자체" },
	  { label: "국가REC여부", value: "국가REC여부" },
	  { label: "RIPA전환여부", value: "RIPA전환여부" },
	  { label: "제출일자", value: "제출일자" },
	  { label: "제출시간", value: "제출시간" },
	  { label: "거래금액", value: "거래금액" },
	  { label: "매물번호&계약번호", value: "매물번호&계약번호" },
	  { label: "한국형FIT여부", value: "한국형FIT여부" },
	  { label: "ESS여부", value: "ESS여부" },
	];
   
	const [selected, setSelected] = useState([]);
	useEffect(() => {
		//console.log(selected);
		//props.handleSelected(selected);
	});

	return (
	  <div style={{width:"200px", display:"inline-block"}} className="ml-2">
		{/* <pre>{JSON.stringify(selected)}</pre>  */}
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

export default MultiSelector;