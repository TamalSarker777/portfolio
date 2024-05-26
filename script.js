document.addEventListener("scroll", function() {
    const animatedBox = document.getElementById("animatedBox");
    const triggerHeight = 120; // Adjust this value as needed

    if (window.scrollY > triggerHeight) {
        animatedBox.classList.add("visible");
    } else {
        animatedBox.classList.remove("visible");
    }
});


function showTable(tableId) {
    // Hide all tables
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => table.style.display = 'none');

    // Show the selected table
    const tableToShow = document.getElementById(tableId);
    tableToShow.style.display = 'table';
}


function showAlert() {
    alert("Unfortunately, you can't access this right now. Sorry for the inconvenience.");
}


//....................... Project URL for ML.................
function redirectToPagetoproject1() {
    window.location.href = 'https://github.com/TamalSarker777/sentiment-and-summarization-of-online-product-reviews';  
}
function redirectToPagetoproject2() {
    window.location.href = 'https://github.com/TamalSarker777/Soybean-Leaves-Disease-Detection';  
}
function redirectToPagetoproject3() {
    window.location.href = 'https://github.com/TamalSarker777/Fine-Tuning-With-LLM';  
}
function redirectToPagetoproject4() {
    window.location.href = 'https://github.com/TamalSarker777/LangChain-Chat-With-Your-Data';  
}
function redirectToPagetoproject5() {
    window.location.href = 'https://github.com/TamalSarker777/Some-basic-regression-and-classification-models-using-tensorflow';  
}


//....................... Project URL for Web Development.................

function redirectToPagetoprojectWeb1() {
    window.location.href = 'https://github.com/TamalSarker777/Ecommerce_Website_Using_Django';  
}
function redirectToPagetoprojectWeb2() {
    window.location.href = 'https://github.com/TamalSarker777/BD-JOB_HUNTER';  
}
function redirectToPagetoprojectWeb3() {
    window.location.href = 'https://github.com/TamalSarker777/ReadRecent';  
}