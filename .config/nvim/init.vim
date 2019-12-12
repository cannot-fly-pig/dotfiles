"dein Scripts-----------------------------
if &compatible
  set nocompatible               " Be iMproved
endif

" Required:
set runtimepath+=$HOME/.cache/dein/repos/github.com/Shougo/dein.vim

" Required:
if dein#load_state('$HOME/.cache/dein')
  call dein#begin('$HOME/.cache/dein')

  " Let dein manage dein
  " Required:
  call dein#add('$HOME/.cache/dein/repos/github.com/Shougo/dein.vim')

  call dein#load_toml('$HOME/.config/nvim/rc/dein.toml',{'lazy': 0})
  call dein#load_toml('$HOME/.config/nvim/rc/dein_lazy.toml',{'lazy': 1})
  " You can specify revision/branch/tag.
  call dein#add('Shougo/deol.nvim', { 'rev': '01203d4c9' })

  " Required:
  call dein#end()
  call dein#save_state()
endif

" Required:
filetype plugin indent on
syntax enable

" If you want to install not installed plugins on startup.
if dein#check_install()
  call dein#install()
endif

"End dein Scripts------------------------- 

" #####表示設定#####"
set number "行番号を表示する
set title "編集中のファイル名を表示
syntax on "コードの色分け
set tabstop=4 "インデントをスペース4つ分に設定
set smartindent "オートインデント
set laststatus=2
set ambiwidth=double

"" ####Encode####
" 下記の指定は環境によって文字化けする可能性があるので適宜変更する
set encoding=UTF-8 "文字コードをUTF-8にする
set fileencoding=UTF-8 "文字コードをUTF-8にする
set termencoding=UTF-8 "文字コードをUTF-8にする

" ###molokai表示設定###
colorscheme gruvbox
set t_Co=256
" "### lightlineの設定
set laststatus=2
" " #####検索設定#####
set ignorecase "大文字/小文字の区別なく検索する
set smartcase "検索文字列に大文字が含まれている場合は区別して検索する
set wrapscan "検索時に最後まで行ったら最初に戻る
"" c++
function MakeCquery()
		let temp = expand('%:p')
		echo system('echo ''[{"directory": "~/atcoder","command": "g++  ' . temp . ' -std=c++14","file": "' . temp . '"}]'' > compile_commands.json')
endfunction

"" キーマップ
inoremap jj <Esc>
map <C-f> :NERDTreeToggle<CR>

""コピペ
set clipboard+=unnamedplus
""テンプレート
autocmd BufNewFile *.cpp 0r $HOME/.config/nvim/template/template.cpp

set guifont=Fira\ Mono\ Regular\ Nerd\ Font\ Complete\ 11
" フォルダアイコンを表示
let g:WebDevIconsNerdTreeBeforeGlyphPadding = ""
let g:WebDevIconsUnicodeDecorateFolderNodes = v:true
" after a re-source, fix syntax matching issues (concealing brackets):
if exists('g:loaded_webdevicons')
		call webdevicons#refresh()
endif
