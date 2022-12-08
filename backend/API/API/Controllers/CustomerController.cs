using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace API.Controllers
{
    [ApiController]
    public class CustomerController : Controller
    {
        APIContext db = new APIContext();
        [Route("get_Cus")]
        [HttpGet]
        public IActionResult Getcus()
        {
            var cus = db.KhachHang.Select(x => new {
                TenKh = x.TenKh
            }).ToList();
            return Json(cus);
        }
            [Route("checkout")]
            [HttpPost]
            public IActionResult Createbill([FromBody] checkout model)
             {
            model.kh.Id ="KH-"+Guid.NewGuid().ToString();
            db.KhachHang.Add(model.kh);
            db.SaveChanges();
            string MaKhachHang = model.kh.Id;
            Donhang dh = new Donhang();

            dh.MaDonHang = "DH-"+Guid.NewGuid().ToString();
            dh.MaKhachHang = MaKhachHang;
            dh.Trangthai = "ok";
            dh.Ngaydat = DateTime.Now;
            db.Donhang.Add(dh);
            db.SaveChanges();
            string MaDonHang = dh.MaDonHang;

            if (model.donhang.Count > 0)
            {
                foreach (var item in model.donhang)
                {
                    item.MaDonHang = "CTDH-"+MaDonHang;
                    db.ChiTietDonHang.Add(item);
                }
                db.SaveChanges();
            }
            return Ok(new { data = "OK" });

            }
        }
        public class checkout
        {
            public KhachHang kh { get; set; }
            public List<ChiTietDonHang> donhang { get; set; }
        }
    }
