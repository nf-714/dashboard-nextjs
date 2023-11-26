import SideNav from '@/app/ui/dashboard/sidenav';

interface ChildrenInterface {
    children: React.ReactNode
}

export default function Layout({children}: ChildrenInterface) {
    return (
        <div className="flex flex-row h-screen bg-gray-100">
            <SideNav />
            <div className="flex flex-col flex-1">
                {children}
            </div>
        </div>
    )
}