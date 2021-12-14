let a = Array.from(document.querySelectorAll('.relative-table')[9].getElementsByTagName('tbody')[0].getElementsByTagName('tr'));

a.map(tr => tr.getElementsByTagName('span')[0].innerText)
