const search = () => {
    let query = $("#search-box").val();
    console.log(query)

    let url = `http://localhost:9999/search/${query}`;

    if(query != ''){
        fetch(url).then((responsce) =>{
            return responsce.json();
        }).then((data) => {
            console.log(data);

            let text = `<li class='list-group'>`;

            data.forEach((contect) => {
                text += `<a href='#' class='list-group-item' ${contect.contect_name} </a>`
            })

            text += `</li>`
        });

        $("#search-result").show();

    }


}