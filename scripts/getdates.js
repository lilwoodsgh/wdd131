const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText = 'Copyright ${currentYear}';

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = '${lastModifiedDate.getFullYear()} - ${lastModifiedDate.getMonth() + 1} - ${lastModifiedDate.getDate()}';

document.getElementById("lastModified").innerText = 'lastModified: ${formattedDate}';