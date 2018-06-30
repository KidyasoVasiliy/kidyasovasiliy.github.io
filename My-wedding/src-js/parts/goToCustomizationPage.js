function goToCustomizationPage(){
	let createYourSite = document.querySelector('.portfolio-button__main'),
		createAWebsite = document.querySelector('.header-button__main');


	createYourSite.onclick = ()=>{
		document.location.href = "site-builder.php";
	};
	createAWebsite.onclick = ()=>{
		document.location.href = "site-builder.php";
	};
}
export default goToCustomizationPage;