set -x EDITOR vim


alias ef 'vim ~/.config/fish/config.fish'

alias l 'ls'
alias ll 'ls -ltr'
alias la 'ls -la'
alias ls 'ls -G -F'
alias ltr 'ls -ltr'

alias grep 'grep --color'

alias mkdir 'mkdir -p'
alias rm 'rm -i'
alias cp 'cp -i'
alias mv 'mv -i'

alias cot 'open -a coteditor'
alias c 'clear'
alias h 'history'

alias cx 'chmod +x'
alias 'c-x' 'chmod -x'

alias cd.. 'cd ..'
alias .. 'cd ..'
alias ... 'cd ../..'
alias .... 'cd ../../..'
alias ..... 'cd ../../../..'

alias vim 'nvim'

function reload
  source ~/.config/fish/config.fish
end

function cd
  builtin cd $argv; and ls
end

# bobthefish
set -g theme_display_date no
set -g theme_color_scheme dracula
set PATH ~/anaconda3/bin $PATH

thefuck --alias | source

if test (ps aux | grep tmux | wc -l) -gt 1
		tmux a -d
else 
		tmux new -s Mysession
end
urxvtd -o -f

function peco_select_history_order
  if test (count $argv) = 0
    set peco_flags --layout=top-down
  else
    set peco_flags --layout=bottom-up --query "$argv"
  end

  history|peco $peco_flags|read foo

  if [ $foo ]
    commandline $foo
  else
    commandline ''
  end
end

function fish_user_key_bindings
		bind -M insert jj "if commandline -P; commandline -f cancel; else; set fish_bind_mode default; commandline -f backward-char force-repaint; end"
		bind yy fish_clipboard_copy
		bind Y fish_clipboard_copy
		bind p fish_clipboard_paste
		bind /cr 'peco_select_history' # Ctrl + R
end


