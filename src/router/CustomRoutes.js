import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookEditPage from "../pages/admin/books/BookEditPage";
import BooksPage from "../pages/admin/books/BooksPage";
import DashBoardPage from "../pages/admin/dashboard/DashBoardPage";
import PublisherPage from "../pages/admin/publishers/PublisherPage";
import PublisherEditPage from "../pages/admin/publishers/PublisherEditPage";
import UserEditPage from "../pages/admin/users/UserEditPage";
import UsersPage from "../pages/admin/users/UsersPage";
import AdminTemplate from "../templates/AdminTemplate";
import ProtectedRoute from "./ProtectedRoute";
import PublisherNewPage from "../pages/admin/publishers/PublisherNewPage";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import CategoryNewPage from "../pages/admin/categories/CategoryNewPage";
import CategoriesEditPage from "../pages/admin/categories/CategoriesEditPage";
import UserTemplate from "../templates/user-template";
import HomePage from "../pages/visitor/HomePage";
import NotFound from "../components/common/not-found/NotFound";
import LibraryPage from "../pages/visitor/LibraryPage";
import BookNewPage from "../pages/admin/books/BookNewPage";
import UserNewPage from "../pages/admin/users/UserNewPage";
import ReportsPage from "../pages/admin/reports/ReportsPage";
import ExpiredBooksPage from "../pages/admin/reports/ExpiredBooksPage";
import MostBorrowersBooksPage from "../pages/admin/reports/MostBorrowersBooksPage";
import MostPopularBooksPage from "../pages/admin/reports/MostPopularBooksPage";
import UnreturnedBooksPage from "../pages/admin/reports/UnreturnedBooksPage";
import AuthorsPage from "../pages/admin/authors/AuthorsPage";
import AuthorEditPage from "../pages/admin/authors/AuthorEditPage";
import AuthorNewPage from "../pages/admin/authors/AuthorNewPage";
import BookDetailPage from "../pages/visitor/BookDetailPage";
import AccountPage from "../pages/visitor/AccountPage";
import UserInformationPage from "../pages/user/UserInformationPage";
import ContactPage from "../pages/visitor/ContactPage";
import MyBooksPage from "../pages/user/MyBooksPage";
import UnauthorizedPage from "../pages/common/UnauthorizedPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route
            path="library-page"
            element={
              <UserTemplate>
                <LibraryPage />
              </UserTemplate>
            }
          />

          <Route
            path="user-information"
            element={
              <UserTemplate>
                <UserInformationPage />
              </UserTemplate>
            }
          />
          <Route
            path="auth"
            element={
              <UserTemplate>
                <AccountPage />
              </UserTemplate>
            }
          />
          {/*       <Route
            path="auth/register"
            element={
              <UserTemplate>
                <AccountPage />
              </UserTemplate>
            }
          /> */}
          <Route path="books">
            <Route
              index
              element={
                <UserTemplate>
                  <MyBooksPage />
                </UserTemplate>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <UserTemplate>
                  <BookDetailPage />
                </UserTemplate>
              }
            />
          </Route>

          <Route />
          <Route
            path="contact-page"
            element={
              <UserTemplate>
                <ContactPage />
              </UserTemplate>
            }
          />

          {/*  <Route
            path="auth"
            element={
              <UserTemplate>
                <AccountPage />
              </UserTemplate>
            }
          /> */}

          <Route path="notfound" element={<NotFound />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />

          <Route path="budak">
            <Route
              index
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <DashBoardPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route path="reports">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <ReportsPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="expired-books"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <ExpiredBooksPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="most-borrowers"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <MostBorrowersBooksPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="most-popular"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <MostPopularBooksPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="unreturned-books"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <UnreturnedBooksPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="publishers">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <PublisherPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":pubId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <PublisherEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="publisher-new-page"
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <PublisherNewPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route path="authors">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AuthorsPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":authorId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AuthorEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="author-new-page"
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <AuthorNewPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route
              path="categories"
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <CategoriesPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route
              path=":catId"
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <CategoriesEditPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route
              path="category-new-page"
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <CategoryNewPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <UsersPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <UserEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="user-new-page"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <UserNewPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="books">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <BooksPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <BookEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="book-new-page"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <BookNewPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
