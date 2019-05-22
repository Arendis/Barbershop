(function() 
{
  var booking = document.querySelector("#book-form"),
      book_date = document.querySelector("#book_date"),
      book_time = document.querySelector("#book_time"),
      book_name = document.querySelector("#book_name"),
      book_phone = document.querySelector("#book_phone"),
      container = document.querySelector(".gallery"),
      photos = Array.prototype.slice.call(document.querySelectorAll(".int-photo")),
      photoVisible = document.querySelector(".int-photo.visible"),
      btn = container.querySelectorAll(".btn"),
      i;

  // Ошибка, если хотя бы одно поле в записи пустует
  if (!(booking==null)) 
  {
    booking.addEventListener("submit", function(event) 
    {
      if (!book_date.value || !book_time.value || !book_name.value || !book_phone.value) 
      {
        event.preventDefault();
        alert("Пожалуйста, заполните все поля формы");
      }
    });
  }

  // Смена фото на главной странице
  if (!(container==null)) 
  {
    for (i = 0; i<btn.length; i++) 
    {
      btn[i].addEventListener("click", function(event) 
      {
        var visible;
        event.preventDefault();
        visible = document.getElementsByClassName("int-photo visible"),
        indexOfVisible = photos.indexOf(visible[0]);

        if ((this.className == "btn next") && (indexOfVisible < (photos.length-1))) 
        {
          photos[indexOfVisible].classList.remove('visible');
          photos[indexOfVisible+1].classList.add('visible');
        }
        else if ((this.className == "btn prev") && (indexOfVisible > 0)) 
        {
          photos[indexOfVisible].classList.remove('visible');
          photos[indexOfVisible-1].classList.add('visible');
        }
      });
    }
  }
})();
