<?php include 'builder-header.php'; ?>
    
<?php include 'menu.php'; ?>

			<section class="builder8">
			  <div class="container">
			  	<h2 class="section-title invitation__title wow fadeInUp">Видеовиджет YouTube</h2>
          <!-- /.section-title -->
          <div class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales <br>
              nisl a scelerisque cursus. 
          </div>
          <!-- /.section-subtitle -->
          <div class="row no-gutters justify-content-center">
            <div class="col"></div>
            <!-- /.col -->
            <div class="col-md-auto d-flex justify-content-center">
              <div class="youtube" id="q_th_D4VHC0" style="width:655px; height:403px;"></div>
              <iframe style="display:none; width:655px; height:403px;" src="https://www.youtube.com/embed/q_th_D4VHC0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                <!-- Надо как-то сделать автоматическое воспроизведение -->
              </iframe>
            </div>
            <!-- /.col-auto -->
            <div class="col"></div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
          
          
          <form class="form-location">
            <div class="form-location-box">
              <label class="form-location__label" for="adress-video">
                Ссылка на видео:
              </label>
              <div class="form-input">
                <input class="form-location-box__text" type="text" name="text-input" id="adress-video" placeholder="Введите адрес Вашего видео" required>
              
                <button class="form-button__add button button__big">Добавить</button>
              </div>
              
            </div>
            <!-- /.form-location-box -->
          </form>
          <!-- /.form-location -->
			    <?php include 'button.php'; ?> 
      </section>
      <!-- /.builder8 -->

<?php include 'builder-footer.php'; ?>