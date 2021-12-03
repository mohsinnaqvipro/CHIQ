import { adminAndOwnerOnly, adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";

export const siteSettings = {
  name: "PickBazar",
  description: "",
  logo: {
    url: "/logo.svg",
    alt: "PickBazar",
    href: "/",
    width: 128,
    height: 40,
  },
  defaultLanguage: "en",
  author: {
    name: "RedQ, Inc.",
    websiteUrl: "https://redq.io",
    address: "",
  },
  headerLinks: [],
  authorizedLinks: [
    {
      href: ROUTES.PROFILE_UPDATE,
      labelTransKey: "authorized-nav-item-profile",
    },
    {
      href: ROUTES.LOGOUT,
      labelTransKey: "authorized-nav-item-logout",
    },
  ],
  currencyCode: "USD",
  sidebarLinks: {
    admin: [
      {
        href: ROUTES.DASHBOARD,
        label: "Dashboard",
        icon: "DashboardIcon",
      },
      {
        href: ROUTES.SHOPS,
        label: "Shops",
        icon: "ShopIcon",
      },
      {
        href: ROUTES.ADMIN_MY_SHOPS,
        label: "My-shops",
        icon: "MyShopIcon",
      },
      {
        href: ROUTES.PRODUCTS,
        label: "Products",
        icon: "ProductsIcon",
      },
      {
        href: ROUTES.ATTRIBUTES,
        label: "Attributes",
        icon: "AttributeIcon",
      },
      {
        href: ROUTES.GROUPS,
        label: "Groups",
        icon: "TypesIcon",
      },
      {
        href: ROUTES.CATEGORIES,
        label: "Categories",
        icon: "CategoriesIcon",
      },
      {
        href: ROUTES.TAGS,
        label: "Tags",
        icon: "TagIcon",
      },
      {
        href: ROUTES.ORDERS,
        label: "Orders",
        icon: "OrdersIcon",
      },
      {
        href: ROUTES.ORDER_STATUS,
        label: "Status",
        icon: "OrdersStatusIcon",
      },
      {
        href: ROUTES.USERS,
        label: "Users",
        icon: "UsersIcon",
      },
      {
        href: ROUTES.COUPONS,
        label: "Coupons",
        icon: "CouponsIcon",
      },
      {
        href: ROUTES.TAXES,
        label: "Taxes",
        icon: "TaxesIcon",
      },
      {
        href: ROUTES.SHIPPINGS,
        label: "Shippings",
        icon: "ShippingsIcon",
      },
      {
        href: ROUTES.WITHDRAWS,
        label: "Withdraws",
        icon: "WithdrawIcon",
      },
      ,
      {
        href: ROUTES.DEALERS,
        label: "Dealers",
        icon: "WithdrawIcon",
      },
      {
        href: ROUTES.SETTINGS,
        label: "Settings",
        icon: "SettingsIcon",
      },
    ],
    shop: [
      {
        href: (shop: string) => `${ROUTES.DASHBOARD}${shop}`,
        label: "Dashboard",
        icon: "DashboardIcon",
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.ATTRIBUTES}`,
        label: "Attributes",
        icon: "AttributeIcon",
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.PRODUCTS}`,
        label: "Products",
        icon: "ProductsIcon",
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.ORDERS}`,
        label: "Orders",
        icon: "OrdersIcon",
        permissions: adminOwnerAndStaffOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.STAFFS}`,
        label: "Staffs",
        icon: "UsersIcon",
        permissions: adminAndOwnerOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.WITHDRAWS}`,
        label: "Withdraws",
        icon: "AttributeIcon",
        permissions: adminAndOwnerOnly,
      },
      {
        href: (shop: string) => `/${shop}${ROUTES.DEALERS}`,
        label: "Dealers",
        icon: "AttributeIcon",
        permissions: adminOwnerAndStaffOnly,
      },
    ],
  },
  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar-placeholder.svg",
  },
};
