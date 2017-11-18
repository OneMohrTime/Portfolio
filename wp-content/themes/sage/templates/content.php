<article id="post_<?php the_ID(); ?>" <?php post_class(); ?>>
    
	<header class="post__header">
		<div class="post__date">
			<span class="month"><?php echo get_the_date('M'); ?></span>
			<span class="day"><?php echo get_the_date('d'); ?></span>
			<a href="<?php echo the_permalink(); ?>"></a>
		</div>
        <div class="post__content wysiwyg">
            <h2 class="post__title">
                <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>
            </h2>
            <?php /*
                $categories_list = get_the_category_list( esc_html__(', ', 'onemohrtime'));
                if ($categories_list && onemohrtime_categorized_blog()) {
                    printf('<span class="post__title--cats wysiwyg">' . esc_html__('Posted in %1$s', 'onemohrtime') . '</span>', $categories_list); // WPCS: XSS OK.
                } */
            ?>
            <?php the_excerpt(); ?>
        </div>
	</header>
    
    <?php $postThumb = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full'); ?>
	<figure class="post__image" style="background-image: url('<?php echo $postThumb[0]; ?>');"></figure>
	
	<a href="<?php the_permalink(); ?>" class="post__link"></a>
	
	<footer class="post__footer">
		<?php //onemohrtime_entry_footer(); ?>
	</footer>
    
</article>

<?php /*<article <?php post_class(); ?>>
  <header>
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <div class="entry-summary">
    <?php the_excerpt(); ?>
  </div>
</article>*/ ?>