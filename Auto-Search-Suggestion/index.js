let url="http://universities.hipolabs.com/search";
let data=[];
let suggestionList=[];
let suggestions=document.querySelector('.suggestions')
const getData=async () => {
    try{
    res=await axios.get(url);
    data.push(...res.data);
    suggestionList.push(...res.data);
    }
    catch(err)
    {
        alert(err)
    }
}
getData();
const suggestSearchCountry=function(search,data){
    return data.filter(college=>{
        let regex=new RegExp(search,'gi');
        return college.country.match(regex);
    })
}

const suggestSearchCollege=function(search,data){
    return data.filter(college=>{
        let regex=new RegExp(search,'gi');
        return college.name.match(regex);
    })
}

const showSuggestions=function(finalSuggestions){
    if (finalSuggestions.length==0){
        suggestions.innerHTML="<h3>No Results Found ...</h3>";
        return
    }
    suggestions.innerHTML=finalSuggestions.map(college=>{
        const nameRegex=new RegExp(collegeInp.value,'gi');
        const countryRegex=new RegExp(countryInp.value,'gi');
        let matchedName=college.name.replace(nameRegex,`<span class="shade-1">${collegeInp.value}</span>`)
        let matchedCountry=college.country.replace(countryRegex,`<span class="shade-2">${countryInp.value}</span>`)
        return `<li>${matchedName}, ${matchedCountry}</li>`
    }).join('')
}


let countryInp=document.querySelector('.country-input');
let collegeInp=document.querySelector('.college-input');
countryInp.addEventListener('input',()=>{
    suggestionList=suggestSearchCountry(countryInp.value,data);
    let finalSuggestions=suggestSearchCollege(collegeInp.value,suggestionList);
    showSuggestions(finalSuggestions);
})
collegeInp.addEventListener('input',()=>{
    let finalSuggestions=suggestSearchCollege(collegeInp.value,suggestionList);
    showSuggestions(finalSuggestions);
})