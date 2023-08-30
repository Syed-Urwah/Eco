export default function sideBarClose(){
    
    const sidebar = document.getElementById('sidebar-multi-level-sidebar');
    sidebar.classList.contains('translate-x-full') && console.log("close")
    sidebar.classList.add('-translate-x-full');
    
}