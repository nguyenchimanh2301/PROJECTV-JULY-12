using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace API.Models
{
    public partial class ChiTietDonHang
    {
        public int MaChiTietDonHang { get; set; }
        public string MaDonHang { get; set; }
        public string MaSanPham { get; set; }
        public int SoLuong { get; set; }
        public double GiaMua { get; set; }

        public virtual Donhang MaDonHangNavigation { get; set; }
    }
}
