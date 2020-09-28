import React, { useState, useEffect, useRef } from 'react';

let autoComplete;

const loadScript = (url, callback) => { 
  let script = document.createElement("script");
  script.type = "text/javascript";
//加载google api， 传入url， callback用来指定应用这个script的fn
// <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCga18RvegEBt8K_CQxbsUo_J-fRX1Q6QU&libraries=places&callback={callback}"></script>
  if(script.readyState) {
    script.onreadystatechange = function() { //AJAX, request 状态为3（in progress)or状态为4（completed),call callback
      if(script.readyState === "load" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
      else {
        script.onload = () => callback(); //页面加载完成后，执行callback
      }
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script); //head的html里面添加script tap
    }
  }
}

function handleScriptLoad(updateQuery, autoCompleteRef) {
  const options = {
    types: ["(regions)"],
    componentRestrictions: { country: "au" },
  };
  // const input = document.getElementById('searchTextField');
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current, //input
    options
  );
  autoComplete.setFields(["address_components", "formatted_address"]); //第一个是集合，第二是完整地址
  autoComplete.addListener("place_changed", () => //listens for whenever a user selects one of the autocomplete suggestions
    handledPlaceSelect(updateQuery) //event handler 
  );
  // When a user selects a place from the predictions attached to the autocomplete text field, the service fires a place_changed event. To get place details:
  // 1. Create an event handler for the place_changed event, and call addListener() on the Autocomplete object to add the handler.
  // 2. Call Autocomplete.getPlace() on the Autocomplete object, to retrieve a PlaceResult object, which you can then use to get more information about the selected place.
}

async function handledPlaceSelect(updateQuery) {
  const addressObj = autoComplete.getPlace();
  const query = addressObj.formatted_address; //W
  updateQuery(query); //W
  console.log(addressObj); //W
}

function SuburbInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCga18RvegEBt8K_CQxbsUo_J-fRX1Q6QU&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []); //W

  return (
    <div>
      <input
        type="text"
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a suburb"
        value={query}
      />
    </div>
  )
}

export default SuburbInput;