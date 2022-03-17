<template>
  <div>
    <h2>Форма пожертвований</h2>
    <p class="lead">Пожертвование на ведение, разработку и доработку блога.</p>
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Корзина</span>
          <span class="badge bg-primary rounded-pill">1</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Пожертвования</h6>
              <small class="text-muted">Пожертвования на разработку и улучшение блога</small>
            </div>
            <span class="text-muted">$1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Всего (USD)</span>
            <strong>$1</strong>
          </li>
        </ul>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Форма для заполнения</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Имя</label>
              <input type="text" class="form-control" id="firstName" placeholder="Имя" required>
              <div class="invalid-feedback">
                Требуется действительное имя.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Фамилия</label>
              <input type="text" class="form-control" id="lastName" placeholder="Фамилия" required>
              <div class="invalid-feedback">
                Требуется действующая фамилия.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
              <div class="invalid-feedback">
                Пожалуйста, введите действующий адрес электронной почты для отправки уведомлений.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Данные карты</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
              <label class="form-check-label" for="credit">Кредитная карта</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="debit">Дебитовая карта</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Имя на карте</label>
              <input type="text" class="form-control" id="cc-name" placeholder="Имя на карте" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Имя на карточке обязательно.
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Номер карты</label>
              <input type="text" class="form-control" id="cc-number" placeholder="Номер карты" required>
              <div class="invalid-feedback">
                Требуется номер кредитной карты.
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Дата выпуска</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="Дата выпуска" required>
              <div class="invalid-feedback">
                Требуется дата выпуска.
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="CVV" required>
              <div class="invalid-feedback">
                Требуется код безопасности.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Перейти к оплате</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationsPage"
}
</script>
