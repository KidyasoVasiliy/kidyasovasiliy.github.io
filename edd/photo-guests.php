<?php include 'builder-header.php'; ?>
    
<?php include 'menu.php'; ?>

			<section class="builder7">
        <div class="container">

          <h2 class="section-title invitation__title wow fadeInUp">Фотоальбом гостей</h2>
          <!-- /.section-title -->
          <div class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales <br>
              nisl a scelerisque cursus. 
          </div>
          <!-- /.section-subtitle -->
          <div class="row justify-content-center">
            <div class="image-box-guest">
              <div class="image-box-1">
                <img src="img/section7/slider.jpeg" alt>
              </div>
              <div class="image-box-2">
                <img src="img/section7/slider2.jpeg" alt>
                <img src="img/section7/slider2-a.jpeg" alt>
              </div>
              <div class="image-box-3">
                <img src="img/section7/slider3.jpeg" alt>
              </div>
              <div class="image-box-1">
                <img src="img/section7/slider.jpeg" alt>
              </div>
              <div class="image-box-2">
                <img src="img/section7/slider2.jpeg" alt>
                <img src="img/section7/slider2-a.jpeg" alt>
              </div>
              <div class="image-box-3">
                <img src="img/section7/slider3.jpeg" alt>
              </div>  
            </div>
            <!-- /.slider-album -->
          </div>
          <!-- /.row -->
           
          <form class="form-album">
            <div class="form-album-box">
              <label class="form-location__label" for="photo">
                Добавить фотографии:
              </label>
              <div class="form-album-input">
                <input class="form-album-box__text" type="text" name="text-input" id="photo" placeholder="Выберите фото с компьютера" required>
                <button class="form-album__btn button__big">Обзор</button> 
                <input class="form-album-box__text form-album-box__text-2" type="text" name="text-input" id="photo1" placeholder="Или просто перетащите фото сюда" required>
               
              </div>
              <button class="form-button__add button button__big">Сохранить</button>
            </div>
            <!-- /.form-album-box -->
          </form>
          <!-- /.form-album -->
				<?php include 'button.php'; ?> 
			</section>
			<!-- /.builder7 -->  


<?php include 'builder-footer.php'; ?>