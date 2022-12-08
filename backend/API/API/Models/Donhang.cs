using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace API.Models
{
    public partial class Donhang
    {
        public Donhang()
        {
            ChiTietDonHang = new HashSet<ChiTietDonHang>();
        }

        public string MaDonHang { get; set; }
        public string MaKhachHang { get; set; }
        public DateTime Ngaydat { get; set; }
        public string Trangthai { get; set; }

        public virtual ICollection<ChiTietDonHang> ChiTietDonHang { get; set; }
    }
}
