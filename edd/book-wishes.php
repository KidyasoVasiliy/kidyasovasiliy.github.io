<?php include 'builder-header.php'; ?>
    
<?php include 'menu.php'; ?>

      <section class="builder6">
        <div class="container">
          <h2 class="section-title invitation__title wow fadeInUp">Книга пожеланий</h2>
          <!-- /.section-title -->
          <div class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales <br>
              nisl a scelerisque cursus. 
          </div>
          <!-- /.section-subtitle -->
          <div class="row justify-content-center">
            <div class="location-button">
              <button class="location-button__map book1 book-active-tab" id="tab1">Поздравления</button><button class="location-button__map book2" id="tab2">Пожелания</button>
            </div>
            <!-- /.location-button -->
          </div>
          <!-- ./row -->
          <div class="row justify-content-center">
            <div class="book-block">
              <div class="slider-book">
                <div class="a-slide-book slide-book-1"></div>
                <div class="a-slide-book slide-book-2"></div>
                <div class="a-slide-book slide-book-3"></div>
                <div class="a-slide-book slide-book-4"></div>
                <div class="a-slide-book slide-book-5"></div>
                <div class="a-slide-book slide-book-6"></div>
                <div class="a-slide-book slide-book-7"></div>
                <div class="a-slide-book slide-book-8"></div>
                <div class="a-slide-book slide-book-9"></div>
                <div class="a-slide-book slide-book-10"></div>
                <div class="a-slide-book slide-book-11"></div>
                <div class="a-slide-book slide-book-12"></div>
                <div class="a-slide-book slide-book-13"></div>
              </div>  
              <div class="book-block__item book-block__item-1" id="first">
                <div class="book-block__pretitle d-flex justify-content-center align-items-center">
                  <div class="line-left"></div>
                  <div>Поздравление</div> 
                  <div class="line-right"></div>
                </div>
                <div class="book-block__title">
                  Поздравляю, дорогие. Хочу вам пожелать долгой и счастливой совместной жизни
                  <!-- Любите крепко, мечтайте красиво, живите роскошно и всегда поддерживайте друг друга! -->
                </div>
                <div class="book-block__subtitle">
                  Как важно, чтобы люди находили друг друга, находили свою любовь и половинку! Вы нашли! Я вас поздравляю со свадьбой, с любовью, с новой жизнью! Желаю много очень крепкой, верной, всепобеждающей любви, но и не меньше терпения и смирения! Понимайте друг друга, прощайте друг другу, учитесь быть вместе с радостью в сердце! Приятных вам долгих дней и жарких ночей! Не серых, а цветных будней, ярких выходных и праздников! Детишек вам полный дом и благополучия!
                </div>
              </div>
              <!-- /.book-block__item -->
              <div class="book-block__item book-block__item-2" id="second">
                <div class="book-block__pretitle d-flex justify-content-center align-items-center">
                  <div class="line-left"></div>
                  <div>Пожелание</div>
                  <div class="line-right"></div>
                </div>
                <div class="book-block__title">
                  Любите крепко, мечтайте красиво, живите роскошно и всегда поддерживайте друг друга!
                </div>
                <div class="book-block__subtitle">
                  Свои судьбы вы соединили <br>
                  Крепкою любовью, молодые, <br>
                  Счастьем своим солнышко затмили <br>
                  И просторы ярко-голубые! <br>
                  Поздравляем вас с днем обручения, <br>
                  Будьте вы друг другу вдохновением! <br>
                </div>
              </div>
              <!-- /.book-block__item -->
            </div>
            <!-- /.book-block -->
            <div class="book-ellips"></div> 
          </div>
          <!-- /.row -->

          
          <div class="row justify-content-center align-items-center">

            <div class="col-12 col-lg-6 d-flex justify-content-center d-xl-flex justify-content-end">

              <form class="form-book" method="POST">

                <div class="form-book-box form-book-box-o d-flex flex-column align-items-center">
                  
                  <label class="form-location__label" for="book">
                    Ваше личное пожелание:
                  </label>
                  <input class="form-box-text" type="text" name="text-input" id="book" placeholder="От кого пожелание" required>
                  <input class="form-box-text" type="text" name="text-input" id="book-title" placeholder="Заголовок пожелания" required>
                  <textarea class="form-box-text__wish form-box-text" placeholder="Текст пожелания" required></textarea>

                  <div class="form-box-button">
                    <button class="form-box-button__main button button__big">Отправить</button>
                  </div>
                  <!-- /.contacts-button -->
                </div>
                <!-- /.form-box -->
              </form>
              <!-- /.input-book -->
            </div>
            <!-- /.col-6 -->
            <div class="col-12 col-lg-6 d-flex justify-content-center d-lg-flex justify-content-start">
              <form class="form-book" method="POST">
                <div class="form-book-box d-flex flex-column align-items-center">
                  <label class="form-location__label" for="book2">
                    Ваше поздравление:
                  </label>
                  <input class="form-box-text" type="text" name="text-input" id="book2" placeholder="От кого поздравление" required>
                  <input class="form-box-text" type="text" name="text-input" id="book-title2" placeholder="Заголовок поздравления" required>
                  <textarea class="form-box-text__wish form-box-text" placeholder="Текст пожелания" required></textarea>
                  <div class="form-box-button">
                    <button class="form-box-button__main button button__big">Отправить</button>
                  </div>
                  <!-- /.contacts-button -->
                </div>
                <!-- /.form-box -->
              </form>
              <!-- /.input-book -->
            </div>
            <!-- /.col-6 -->
          </div>
          <!-- /.row -->				
				<?php include 'button.php'; ?> 
	      </section>
	      <!-- /.builder6 -->

<?php include 'builder-footer.php'; ?>