<?php include 'builder-header.php'; ?>

<?php include 'menu.php'; ?>

      <section class="builder4">
        <div class="container">
          <h2 class="section-title invitation__title wow fadeInUp">Карта проезда</h2>
          <!-- /.section-title -->
          <div class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales <br>
              nisl a scelerisque cursus. 
          </div>
          <!-- /.section-subtitle -->
          <div class="row justify-content-center">
            <div class="location-button">
              <button class="location-button__map location-button__map-1">Google-карта</button><button class="location-button__map location-button__map-2">Яндекс карта</button>
            </div>
            <!-- /.location-button -->
          </div>
          <div id="mapGoogle" class="location-map"></div>

          <form class="form-location">
            <div class="form-location-box">
              <label class="form-location__label" for="adress">
                Добавить адрес:
              </label>
              <div class="form-input">
                <input class="form-location-box__text" type="text" name="text-input" id="adress" placeholder="Введите адрес Вашего мероприятия" required>
              
                <button class="form-button__add button button__big">Добавить</button>
              </div>
              
            </div>
            <!-- /.form-location-box -->
          </form>
          <!-- /.form-location -->
      <?php include 'button.php'; ?>    
      </section>
      <!-- /.builder4 -->
      
<?php include 'builder-footer.php'; ?>