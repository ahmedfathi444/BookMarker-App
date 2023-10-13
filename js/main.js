var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');

var addBtn = document.getElementById('addBtn');

var websitesArray = [];

// Ba3ml Check lw el LocalStorage feh data el user md5lha mn 2pl keda b3rdha fe el table
if (localStorage.getItem('websites') != null) {
    websitesArray = JSON.parse(localStorage.getItem('websites'));
    displayWibsites(websitesArray)
}
// ---------------------------------------------------------------------------------------




// Function Bt3ml Add le El userInputs Fe El Table
function addWebsite() {

    var count = 0;
    for (var i = 0;i< websitesArray.length; i++) {
        if (websitesArray[i].name == siteNameInput.value) {
            count++;
        }
    }

    console.log(count);
    if (validSiteName() == true && validSiteUrl() == true && count == 0) {
        var website = {
            name: siteNameInput.value,
            url: siteUrlInput.value
        }

        websitesArray.push(website);
        localStorage.setItem('websites', JSON.stringify(websitesArray))
        displayWibsites(websitesArray);
    }
    else if(validSiteName() == false && validSiteUrl()==true){

        alert('name is rong')
    }
    else if(validSiteName() == true && validSiteUrl()==false){

        alert('name url is rong')
    }
    else if(validSiteName() == false && validSiteUrl()==false){

        alert('Enter Data')
       
    }
    else{
        alert('Site Name and Site Url Already Exist')
      
    }


    // else if(count>0){
    //     document.getElementById('alertName2').style.display='block';
    // }
    
    // else{
    // //    document.getElementById('alertName').style.display='block'
    // alert('Enter ValidData')
    // }


}
// --------------------------------------------------------------------------------------

// Function Bt3ml Display le El Websites elly fe array da5l El Table
function displayWibsites(arr) {
    var temp = '';
    for (var i = 0; i < arr.length; i++) {
        temp += ` <tr>
        <td>${i}</td>
        <td>${arr[i].name}</td>

        <td><a href="${arr[i].url}" target="_blank" ><button" class="visit btn "><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        
        
        <td><button onclick="deletWebsite(${i})" class="delete btn "><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById('tableData').innerHTML = temp;
}
//------------------------------------------------------------------------------------------

// Function Bt3ml delete ll website mn el array w el table
function deletWebsite(websiteIndex) {
    websitesArray.splice(websiteIndex, 1);
    localStorage.setItem('websites', JSON.stringify(websitesArray))
    displayWibsites(websitesArray);
}
//--------------------------------------------------------------------------------------------

var alertName = document.getElementById('alertName');

function validSiteName() {
    var regexSiteName = /^[A-Z]([a-z]|[A-Z]){0,15}$/;
    var res = regexSiteName.test(siteNameInput.value);
    if (res == true) {
        document.getElementById("alertName").style.display = 'none';
        // siteName.classList.add('is-valid')
        return true;

    }
    else if (siteNameInput.value =='') {
        document.getElementById("alertName").style.display = 'none';
        // siteName.classList.add('is-valid')
        return false;
    }
    else {
        document.getElementById("alertName").style.display = 'block';
        // siteName.classList.add('is-invalid')
        return false;
    }
}


function validSiteUrl() {
    var regexSiteUrl = /^(https:|http:|www\.)\S*/
    var res = regexSiteUrl.test(siteUrlInput.value)

    if (res == true) {
        document.getElementById("alertUrl").style.display = 'none';
        // siteName.classList.add('is-valid')
        return true;

    }
    else if (siteUrlInput.value == '') {
        document.getElementById("alertUrl").style.display = 'none';
        // siteName.classList.add('is-valid')
        return false;
    }
    else {
        document.getElementById("alertUrl").style.display = 'block';
        // siteName.classList.add('is-invalid')
        return false;
    }

}



/* <td><button onclick="visitWebsite(${arr[i].url})" class="visit btn "><i class="fa-solid fa-eye"></i> Visit</button></td> */











// ----------------------------------------------------------------------------------------
