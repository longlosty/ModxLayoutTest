<?php
/**
 * Chunk English lexicon topic
 *
 * @language en
 * @package modx
 * @subpackage lexicon
 */

// Entry out of alpha order because it must come before the entry it's used in below
$_lang['example_tag_chunk_name'] = 'NameOfChunk';

$_lang['chunk'] = 'Potongan';
$_lang['chunk_category_desc'] = 'Use to group Chunks within the Elements tree.';
$_lang['chunk_code'] = 'Chunk Code (HTML)';
$_lang['chunk_description_desc'] = 'Usage information for this Chunk shown in search results and as a tooltip in the Elements tree.';
$_lang['chunk_delete_confirm'] = 'Apakah Anda yakin Anda ingin menghapus potongan ini?';
$_lang['chunk_duplicate_confirm'] = 'Apakah Anda yakin Anda ingin menduplikasi potongan ini?';
$_lang['chunk_err_create'] = 'An error occurred while trying to create the chunk.';
$_lang['chunk_err_duplicate'] = 'Kesalahan duplikasi potongan.';
$_lang['chunk_err_ae'] = 'Sudah ada sepotong dengan nama "[[+nama]]".';
$_lang['chunk_err_invalid_name'] = 'Nama potongan tidak valid.';
$_lang['chunk_err_locked'] = 'Potongan terkunci.';
$_lang['chunk_err_remove'] = 'An error occurred while trying to delete the chunk.';
$_lang['chunk_err_save'] = 'Terjadi kesalahan saat menyimpan potongan.';
$_lang['chunk_err_nf'] = 'Potongan tidak ditemukan!';
$_lang['chunk_err_nfs'] = 'Potongan tidak ditemukan dengan id: [[+id]]';
$_lang['chunk_err_ns'] = 'Potongan tidak ditentukan.';
$_lang['chunk_err_ns_name'] = 'Silakan tentukan nama.';
$_lang['chunk_lock'] = 'Kunci potongan untuk mengedit';
$_lang['chunk_lock_desc'] = 'Only users with “edit_locked” permissions can edit this Chunk.';
$_lang['chunk_name_desc'] = 'Place the content generated by this Chunk in a Resource, Template, or other Chunk using the following MODX tag: [[+tag]]';
$_lang['chunk_new'] = 'Create Chunk';
$_lang['chunk_properties'] = 'Properti bawaan';
$_lang['chunk_tab_general_desc'] = 'Here you can enter the basic attributes for this <em>Chunk</em> as well as its content. The content must be HTML, either placed in the <em>Chunk Code</em> field below or in a static external file, and may include MODX tags. Note, however, that PHP code will not run in this element.';
$_lang['chunk_tag_copied'] = 'Chunk tag copied!';
$_lang['chunk_title'] = 'Membuat/mengedit potongan';
$_lang['chunk_untitled'] = 'Potongan tanpa nama/judul';
$_lang['chunks'] = 'Potongan';

// Temporarily match old keys to new ones to ensure compatibility
// --fields
$_lang['chunk_desc_category'] = $_lang['chunk_category_desc'];
$_lang['chunk_desc_description'] = $_lang['chunk_description_desc'];
$_lang['chunk_desc_name'] = $_lang['chunk_name_desc'];
$_lang['chunk_lock_msg'] = $_lang['chunk_lock_desc'];

// --tabs
$_lang['chunk_msg'] = $_lang['chunk_tab_general_desc'];
