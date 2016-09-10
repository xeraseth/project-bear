<?php

/**
 * @file
 * Template for Shopify Cart, uses Angular.
 *
 * Variables available:
 * - $cart: The translated string "Cart".
 * - $title: The title.
 * - $color: The color of the title.
 */
?>
<a href="#" data-reveal-id="cartModal" class="cart-button"><?php print $cart ?> &nbsp;<span class="cart-count" id="cart-count"></span>
  <span class="tooltip"></span>
</a>
</span>
<div id="cartModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <div id="cart" class="cart"></div>
  <div class="cart__buttons">
    <button id="continue_shopping" class="cart__close js_cart_close">Continue Shopping</button>
    <button id="checkout" class="cart__checkout">Checkout</button>
  </div>
</div>
