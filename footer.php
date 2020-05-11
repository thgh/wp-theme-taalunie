<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package onderwijstermen
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<a class="media" href="http://taalunie.org">
						<img class="mr-3" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/logo_nu-white.png" alt="">
						<div class="media-body">
							<h5 class="mt-0">Taalunie</h5>
							<p>
								De Nederlandse Taalunie is een kennis- en beleidsorganisatie waarin Nederland, Vlaanderen en Suriname samenwerken op het gebied van de Nederlandse taal. De Taalunie draagt zorg voor de beschrijving van de Nederlandse taal en zet zich daarnaast onder meer in voor kwaliteitsvol onderwijs in en van het Nederlands, voor een stevige positie van het Nederlands in de wereld en voor het gebruik van het Nederlands in digitale en niet-digitale contexten.
							</p>
						</div>
					</a>
				</div>
				<div class="col-md-4">
					<a style="font-size: 14px; color: white;" href="https://twitter.com/taalunie?ref=hsnbundels">
						<p class="pt-3">
							<img class="mr-2" style="width:30px" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/twitter-icon.png" alt="">
							Volg ons op Twitter
						</p>
					</a>
					<a style="font-size: 14px; color: white;" href="https://nl.linkedin.com/company/nederlandse-taalunie?ref=hsnbundels">
						<p>
							<div class="icon mr-2">
								<svg viewBox="0 0 24 24">
							    <path fill="#fff" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
								</svg>
							</div>
							Volg ons op Linkedin
						</p>
					</a>
				</div>
			</div>
		</div>
	</footer><!-- #colophon -->
	<div class="by-eskidoos">
		<div class="container">Webapplicatie door <a href="https://eskidoos.be">ESKIDOOS.be</a></div>
	</div>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
