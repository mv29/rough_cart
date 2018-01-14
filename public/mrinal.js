
$(function (){

    $(".mv").click(
        function (){
        let  lol = this.id;
            console.log(lol);
            console.log("mrinal");
        quantity(lol);
     }
    );
    function refreshcatalog (data){
    $('#catalogpage').empty();

       for (let i = 0; i < data.length; i++) {
           $("#catalogpage").append(
                $(`
                   <div class="col-md-4" style="margin-top:50px">
                   <p class="image"> ${data[i].name} </p>
                   <p style="width:350px;margin: 0px ">price  ${data[i].price}</p>
                  <button type="button" class="btn  mv sbutton" id="${i}">Quantity  ${data[i].quantitiy}</button>
                  </div>
                  
            `)
            )
        }
    }
    window.quantity = function (product_id) {
        $.get(`/catalog/id?x=${product_id}`, function (data) {
            refreshcatalog(data);
        })
    };
});
