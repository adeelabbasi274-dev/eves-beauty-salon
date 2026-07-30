<?php
/**
 * Enqueue Vite-built assets using manifest.json
 * Place manifest.json and the dist files at the theme root (same folder as this functions.php)
 */

function eves_get_manifest() {
    $manifest_path = get_template_directory() . '/manifest.json';
    if ( ! file_exists( $manifest_path ) ) {
        return null;
    }
    $json = file_get_contents( $manifest_path );
    $manifest = json_decode( $json, true );
    if ( json_last_error() !== JSON_ERROR_NONE ) {
        return null;
    }
    return $manifest;
}

function eves_find_entry_key( $manifest ) {
    // Prefer common known entry keys
    $candidates = array(
        'src/main.tsx',
        'src/main.ts',
        'src/index.tsx',
        'src/index.ts',
        'index.html',
    );

    foreach ( $candidates as $c ) {
        if ( isset( $manifest[ $c ] ) ) {
            return $c;
        }
    }

    // Fallback: pick the first entry that has isEntry true
    foreach ( $manifest as $key => $data ) {
        if ( ! empty( $data['isEntry'] ) ) {
            return $key;
        }
    }

    // Nothing found
    return null;
}

function eves_enqueue_vite_assets() {
    $manifest = eves_get_manifest();
    if ( ! $manifest ) {
        // manifest missing — nothing to enqueue
        return;
    }

    $entry_key = eves_find_entry_key( $manifest );
    if ( ! $entry_key ) {
        return;
    }

    $entry = $manifest[ $entry_key ];
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    // Enqueue CSS if present
    if ( ! empty( $entry['css'] ) && is_array( $entry['css'] ) ) {
        foreach ( $entry['css'] as $i => $css ) {
            $handle = 'eves-vite-css-' . $i;
            wp_enqueue_style( $handle, $theme_uri . '/' . ltrim( $css, '/' ), array(), file_exists( $theme_dir . '/' . ltrim( $css, '/' ) ) ? filemtime( $theme_dir . '/' . ltrim( $css, '/' ) ) : null );
        }
    }

    // Enqueue any import chunk files (vendor, shared)
    if ( ! empty( $entry['imports'] ) && is_array( $entry['imports'] ) ) {
        foreach ( $entry['imports'] as $imp ) {
            if ( isset( $manifest[ $imp ] ) && ! empty( $manifest[ $imp ]['file'] ) ) {
                $file = $manifest[ $imp ]['file'];
                $handle = 'eves-vite-chunk-' . md5( $file );
                wp_enqueue_script( $handle, $theme_uri . '/' . ltrim( $file, '/' ), array(), file_exists( $theme_dir . '/' . ltrim( $file, '/' ) ) ? filemtime( $theme_dir . '/' . ltrim( $file, '/' ) ) : null, true );
            }
        }
    }

    // Enqueue the entry file
    if ( ! empty( $entry['file'] ) ) {
        wp_enqueue_script( 'eves-vite-entry', $theme_uri . '/' . ltrim( $entry['file'], '/' ), array(), file_exists( $theme_dir . '/' . ltrim( $entry['file'], '/' ) ) ? filemtime( $theme_dir . '/' . ltrim( $entry['file'], '/' ) ) : null, true );
    }
}
add_action( 'wp_enqueue_scripts', 'eves_enqueue_vite_assets' );

/**
 * Business details: output JSON-LD schema in the head and visible contact block in the footer
 * Provided business information:
 * Name: Ladies Beauty Parlour By Naheeda
 * Address: Khizer Khan Wali, Jalalpur Jattan, 50780, Pakistan
 * Phone: 03009626198
 * Google Business Profile: https://maps.app.goo.gl/iWiYXVk9DLiUoVCf6
 * Category: Ladies Beauty Saloon
 */
function eves_business_schema() {
    $business = array(
        '@context' => 'https://schema.org',
        '@type' => 'BeautySalon',
        'name' => "Ladies Beauty Parlour By Naheeda",
        'image' => '',
        'address' => array(
            '@type' => 'PostalAddress',
            'streetAddress' => 'Khizer Khan Wali',
            'addressLocality' => 'Jalalpur Jattan',
            'postalCode' => '50780',
            'addressCountry' => 'PK'
        ),
        'telephone' => '+923009626198',
        'url' => 'https://maps.app.goo.gl/iWiYXVk9DLiUoVCf6',
        'sameAs' => array(
            'https://maps.app.goo.gl/iWiYXVk9DLiUoVCf6'
        ),
        'priceRange' => null,
        'geo' => null,
        'openingHoursSpecification' => null,
        'service' => null,
        'category' => 'Ladies Beauty Saloon'
    );

    // Remove null values before output
    $filtered = array_filter( $business, function( $v ) { return $v !== null; } );

    echo "<script type=\"application/ld+json\">" . wp_json_encode( $filtered ) . "</script>\n";
}
add_action( 'wp_head', 'eves_business_schema', 5 );

/**
 * Render visible business contact block in the footer
 */
function eves_render_business_contact() {
    ?>
    <div class="eves-business-info" style="background:#fff8f5;border-top:1px solid #f1d6da;padding:18px 20px;color:#5a2d3c;font-family:inherit;">
      <div style="max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
        <div style="flex:1;min-width:220px;font-weight:600;">Ladies Beauty Parlour By Naheeda</div>
        <div style="flex:2;min-width:220px;">Khizer Khan Wali, Jalalpur Jattan, 50780, Pakistan</div>
        <div style="flex:1;min-width:160px;"><a href="tel:+923009626198" style="color:#5a2d3c;text-decoration:none;">📞 +92 300 9626198</a></div>
        <div style="flex:1;min-width:180px;"><a href="https://maps.app.goo.gl/iWiYXVk9DLiUoVCf6" target="_blank" rel="noopener noreferrer" style="color:#5a2d3c;text-decoration:underline;">Google Business Profile</a></div>
      </div>
    </div>
    <?php
}
add_action( 'wp_footer', 'eves_render_business_contact', 20 );

?>
